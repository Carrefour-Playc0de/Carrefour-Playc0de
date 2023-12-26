import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburDesayunoMeriendaInfusiones extends BasePage {

    readonly INFUSIONES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.INFUSIONES = this.page.locator('//a [@id="menu-item-category-infusiones"]')
    }

    async clickDesayunoMeriendaInfusiones(): Promise<void> {
        await this.click(this.INFUSIONES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburDesayunoMeriendaInfusiones(): Promise<void> {
        await this.clickDesayunoMeriendaInfusiones()
    }
}
