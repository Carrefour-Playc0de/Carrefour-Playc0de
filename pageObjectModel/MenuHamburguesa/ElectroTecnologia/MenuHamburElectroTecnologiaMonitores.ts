import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburElectroTecnologiaMonitores extends BasePage {

    readonly MONITORES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.MONITORES =this.page.locator('//a [@id="menu-item-category-monitores-proyectores"]')
    }

    async clickElectroTecnologiaMonitores(): Promise<void> {
        await this.click(this.MONITORES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburElectroTecnologiaMonitores(): Promise<void> {
        await this.clickElectroTecnologiaMonitores()
    }
}
