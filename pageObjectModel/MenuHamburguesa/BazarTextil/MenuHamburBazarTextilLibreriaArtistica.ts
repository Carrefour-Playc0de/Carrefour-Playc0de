import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilLibreriaArtistica extends BasePage {

    readonly LIBRERIA_ARTISTICA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LIBRERIA_ARTISTICA = this.page.locator('//a [@id="menu-item-category-libreria-artistica"]')
    }

    async clickBazarTextilLibreriaArtistica(): Promise<void> {
        await this.click(this.LIBRERIA_ARTISTICA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilLibreriaArtistica(): Promise<void> {
        await this.clickBazarTextilLibreriaArtistica()
    }
}
